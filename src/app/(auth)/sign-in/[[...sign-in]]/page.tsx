import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="min-h-screen flex-center">
      <SignIn />
    </div>
  );
}
