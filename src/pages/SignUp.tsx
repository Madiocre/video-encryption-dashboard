import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

const SignUpPage = () => {
    return (

        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Your password" required />
              </div>
              <Button type="submit" className="w-full">Sign Up</Button>
            </form>
            <p className="mt-4 text-center text-sm">
              Already have an account? <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link>
            </p>
          </CardContent>
        </Card>

    );
  };

  export default SignUpPage