// TSidebar/Classes.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, List, ListItem, ListItemText, CircularProgress, Alert, Button, Stack } from "@mui/material";
import axios from "../../../api/axios";



interface Class {
  id: number;
  name: string;
  studentCount?: number;
  // add other properties as needed
}

const Classes = () => {
  const navigate = useNavigate();

  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newClassName, setNewClassName] = useState<string>("");

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setLoading(true);

        const response = await axios.get("/teacher/classes");
        setClasses(response.data.classes);
      } catch (err) {
        setError("Failed to fetch classes.");
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const handleAddClass = async () => {
    if (!newClassName.trim()) return;
    try {
      const response = await axios.post("/teacher/classes", { name: newClassName });
      setClasses((prev) => [...prev, response.data.class]);
      setNewClassName("");
    } catch (err) {
      setError("Failed to add class.");
    }
  };

  const handleDeleteClass = async (id: number) => {
    try {
      await axios.delete(`/teacher/classes/${id}`);
      setClasses((prev) => prev.filter((cls) => cls.id !== id));
    } catch (err) {
      setError("Failed to delete class.");
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;


  return (
    
    <>
      <Typography variant="h4" gutterBottom>
        Your Classes
      </Typography>

      <Stack direction="row" spacing={2} mb={2}>
        <TextField
          label="New Class Name"
          variant="outlined"
          size="small"
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddClass}>
          Add Class
        </Button>
      </Stack>

      {!classes?.[0] ? (
        <Typography>No classes assigned yet.</Typography>
      ) : (
        <List>
          {classes.map((cls) => (
            <ListItem
              key={cls.id}
              divider
              component="div"
              onClick={() => navigate(`/teacher/dashboard/classes/${cls.id}`)}
            >
              <ListItemText
                primary={cls.name}
                secondary={`${cls.studentCount || 0} students`}
              />
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteClass(cls.id);
                }}
              >
                Delete
              </Button>
            </ListItem>

          ))}
        </List>

      )}
    </>
  );
};

export default Classes;
