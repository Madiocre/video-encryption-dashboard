import { useOutlet } from "react-router"



const AuthLayout = () => {
  const children = useOutlet()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {children}
    </div>
  );
};


export default AuthLayout