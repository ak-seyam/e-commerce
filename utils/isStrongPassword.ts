export function IsStrongPassword(password: string) {
    const res = (
        /[A-Z]/g.test(password) &&
        /[a-z]/g.test(password) &&
        /[^a-zA-Z0-9]/g.test(password) &&
        /[0-9]/g.test(password) &&
        password.length > 8
    );
    return(res)
}