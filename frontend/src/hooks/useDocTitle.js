import { useEffect } from 'react';
 
const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - RemoteRemedy`;
        } else {
            document.title = 'RemoteRemedy';
        }
    }, [title]);

    return null;
};

export default useDocTitle;