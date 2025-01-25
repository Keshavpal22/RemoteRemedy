import { useEffect } from 'react';
 
const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Remote Remedy`;
        } else {
            document.title = 'Remote Remedy';
        }
    }, [title]);

    return null;
};

export default useDocTitle;