import { UserButton } from "@clerk/nextjs";

UserButton

export default function Home() {
  return (
    <div>
      <UserButton 
      afterSignOutUrl="/"
      />
    </div>
  );
}
