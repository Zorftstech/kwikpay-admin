"use client";

import React, { useState } from "react";
import styles from "../styles/dashboard.module.css";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface ITableItem {
  name: string;
  no_of_faculties?: string;
  no_of_department?: string;
}

const all_schools = [
  {
    name: "federal university Of technology, minna",
    no_of_faculties: "20",
    no_of_department: "60",
  },
  {
    name: "federal university Of technology, akure",
    no_of_faculties: "8",
    no_of_department: "30",
  },
  {
    name: "federal university Of Agriculture, owerri",
    no_of_faculties: "10",
    no_of_department: "50",
  },
  {
    name: "federal university lokoja",
    no_of_faculties: "70",
    no_of_department: "160",
  },
  {
    name: "federal university of lagos",
    no_of_faculties: "50",
    no_of_department: "100",
  },
];

const school = [
  {
    name: "school of physical sciences",
    no_of_department: "14",
  },
  {
    name: "school of life sciences",
    no_of_department: "10",
  },
  {
    name: "school of agriculture",
    no_of_department: "12",
  },
  {
    name: "school of political sciences",
    no_of_department: "8",
  },
  {
    name: "school of regional studies",
    no_of_department: "20",
  },
  {
    name: "school of actaury sciences",
    no_of_department: "12",
  },
  {
    name: "school of fishery",
    no_of_department: "8",
  },
];

const department = [
  { name: "mathematics" },
  { name: "physics" },
  { name: "geography" },
  { name: "geology" },
  { name: "geophysics" },
  { name: "human resources" },
  { name: "politics" },
];

const Dashboard = () => {
  const [tableItem, setTableItem] = useState<ITableItem[]>(all_schools);
  const [schoolName, setSchoolName] = useState("");
  const [facultyName, setFacultyName] = useState("");

  const handleNavigate = (item: ITableItem) => {
    if (Object.keys(tableItem[0]).length === 3) {
      setSchoolName(item.name);
      setTableItem(school);
    } else {
      setFacultyName(item.name);
      setTableItem(department);
    }
  };

  const router = useRouter();

  return (
    <>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M38.9648 37.5195C36.8066 33.7695 32.7539 31.25 28.125 31.25H21.875C17.2461 31.25 13.1934 33.7695 11.0352 37.5195C14.4727 41.3477 19.4531 43.75 25 43.75C30.5469 43.75 35.5273 41.3379 38.9648 37.5195ZM0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25ZM25 26.5625C26.8648 26.5625 28.6532 25.8217 29.9718 24.5031C31.2905 23.1845 32.0312 21.3961 32.0312 19.5312C32.0312 17.6664 31.2905 15.878 29.9718 14.5594C28.6532 13.2408 26.8648 12.5 25 12.5C23.1352 12.5 21.3468 13.2408 20.0282 14.5594C18.7095 15.878 17.9688 17.6664 17.9688 19.5312C17.9688 21.3961 18.7095 23.1845 20.0282 24.5031C21.3468 25.8217 23.1352 26.5625 25 26.5625Z"
                fill="#416BFF"
              />
            </svg>
          </div>

          <div>
            <Button
              colorScheme="blue"
              px={40}
              py={10}
              rounded={10}
              border={"none"}
              background={"#3183DE"}
              color={"#fff"}
              fontSize={16}
              fontWeight={500}
              cursor={"pointer"}
              type="button"
              onClick={() => router.push("/login")}
            >
              Logout
            </Button>
          </div>
        </nav>

        <div className={styles.bread_crumb}>
          <Button
            background={"transparent"}
            outline={"none"}
            border={"none"}
            fontWeight={500}
            fontSize={16}
          >
            Schools
          </Button>

          {Object.keys(tableItem[0]).length <= 2 && (
            <Button
              background={"transparent"}
              outline={"none"}
              border={"none"}
              fontWeight={500}
              fontSize={16}
              textTransform={"capitalize"}
              onClick={() => setTableItem(all_schools)}
            >
              <span className={styles.right_arrow}>&lt;</span>
              {schoolName}
            </Button>
          )}

          {Object.keys(tableItem[0]).length <= 1 && (
            <Button
              background={"transparent"}
              outline={"none"}
              border={"none"}
              fontWeight={500}
              fontSize={16}
              textTransform={"capitalize"}
              onClick={() => setTableItem(school)}
            >
              <span className={styles.right_arrow}>&lt;</span>
              {facultyName}
            </Button>
          )}
        </div>

        <div className={styles.table_wrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.td}>S/N</th>
                <th className={styles.td}>Names</th>
                {Object.keys(tableItem[0]).length === 3 && (
                  <th className={styles.td}>Faculties</th>
                )}
                {Object.keys(tableItem[0]).length === 2 && (
                  <th className={styles.td}>Departments</th>
                )}

                <th className={styles.td}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {tableItem.map((item, index) => (
                <tr
                  className={styles.tr}
                  key={index}
                  onClick={() => handleNavigate(item)}
                >
                  <td className={styles.td}>{index + 1}</td>
                  <td className={styles.td}>{item.name}</td>
                  {Object.keys(tableItem[0]).length === 3 && (
                    <td className={styles.td}>{item.no_of_faculties}</td>
                  )}
                  {Object.keys(tableItem[0]).length === 2 && (
                    <td className={styles.td}>{item.no_of_department}</td>
                  )}
                  <td className={styles.td}>
                    {true ? (
                      <Button
                        colorScheme="blue"
                        px={16}
                        py={8}
                        rounded={10}
                        border={"none"}
                        background={"#da4141"}
                        color={"#fff"}
                        fontSize={14}
                        fontWeight={500}
                        cursor={"pointer"}
                        type="submit"
                      >
                        Deactivate
                      </Button>
                    ) : (
                      <Button
                        colorScheme="blue"
                        px={16}
                        py={8}
                        rounded={10}
                        border={"none"}
                        background={"#07a107"}
                        color={"#fff"}
                        fontSize={14}
                        fontWeight={500}
                        cursor={"pointer"}
                        type="submit"
                      >
                        Activate
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
