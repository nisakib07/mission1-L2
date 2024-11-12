type User = {
  name: string;
  email: string;
};

type Admin = {
  adminLevel: string;
};

type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {
  return `Admin name is ${user?.name}, Email - ${user?.email} and Admin Level is ${user?.adminLevel}`;
}

const admin1: AdminUser = {
  name: "Sakib",
  email: "sakib@gmail.com",
  adminLevel: "Top",
};

console.log(describeAdmin(admin1));
