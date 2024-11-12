function getDisplayName(name: string | null | undefined): string {
  return name ?? "Anonymous";
}

console.log(getDisplayName("Sakib"));
