import React, { useState } from 'react';

export type CCContextType = {
  course: string;
  setCourse: (courseId: string) => void;
};

const CCContext = React.createContext<CCContextType | null>(null);

export const CCProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {

  const [course, setCourseState] = useState<string>("");
  const setCourse = (newValue: string) => {
    setCourseState(() => newValue);
  }

  return (
    <CCContext.Provider
      value={{
        course,
        setCourse
      }}
    >
      {children}
    </CCContext.Provider>
  );
};

export default CCContext;
