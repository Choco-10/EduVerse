import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Typography, CircularProgress, Alert, List, ListItem, Stack, Divider } from "@mui/material";
import AddStudent from "./AddStudent";
import axios from "../../../api/axios";

interface Student { id: number; name: string; roll_no: string; }

const ClassDetail = () => {
  const { classId } = useParams();
  const parsedClassId = Number(classId);
  const [classInfo, setClassInfo] = useState<{ id: number; name: string } | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClassData = useCallback(async () => {
    try {
      const resp = await axios.get(`/teacher/classes/${parsedClassId}`);
      setClassInfo(resp.data.class);
      setStudents(resp.data.students);
    } catch (e) {
      setError("Failed to load class details");
    } finally {
      setLoading(false);
    }
  }, [parsedClassId]);

  useEffect(() => {
    fetchClassData();
  }, [fetchClassData]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;


  return (
    <>
      <Typography variant="h4" gutterBottom>{classInfo?.name}</Typography>

      <Stack direction="row" spacing={4} alignItems="flex-start">
        {/* Student List */}
        <div style={{ flex: 1 }}>
          <Typography variant="h6">Students</Typography>
          <List>
            {students.map((s) => (
              <ListItem key={s.id}>{s.name} - {s.roll_no}</ListItem>
            ))}
          </List>
        </div>

        {/* Add Student Form */}
        <div style={{ flex: 1 }}>
          <AddStudent classId={parsedClassId} refresh={fetchClassData} />
        </div>
      </Stack>

      <Divider sx={{ marginTop: 4 }} />
    </>
  );
};

export default ClassDetail;
