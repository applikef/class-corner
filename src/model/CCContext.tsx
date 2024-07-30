import React, { useState } from 'react';

export type CCContextType = {
  course: string;
  setCourse: (courseId: string) => void;
  pageId: string;
  setPageId: (page: string) => void;
};

const CCContext = React.createContext<CCContextType | null>(null);

export const CCProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {

  const [course, setCourseState] = useState<string>("");
  const setCourse = (newValue: string) => {
    setCourseState(() => newValue);
  }

  const [pageId, setPageIdState] = useState<string>("");
  const setPageId = (newValue: string) => {
    setPageIdState(() => newValue);
  }

  return (
    <CCContext.Provider
      value={{
        course,
        pageId,
        setCourse,
        setPageId
      }}
    >
      {children}
    </CCContext.Provider>
  );
};

export default CCContext;
