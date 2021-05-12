export const Root = process.env.NODE_ENV === "development" ? {
    adminUrl: "http://localhost:3000/"
}
:
{
    adminUrl: "https://dependex.com/",
}