import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles["home-container"]}>

            <h1 className={styles["home-title"]}>Welcome to Eduverse</h1>

            <p className={styles["home-subtitle"]}>
                Empowering smarter education for students, teachers, and administrators.
            </p>

            <div className={styles["home-button-container"]}>
                <button className={styles["home-button"]} onClick={() => navigate("/login")}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;