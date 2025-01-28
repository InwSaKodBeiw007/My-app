async function getEMP() {
    const result = await fetch('http://localhost:3000/api/EMP')
    console.log(result)
    if (!result.ok) {
        throw new Error('Pls Check your /api/EMP Again!')
    }
    return result.json()
}

export default async function Page() {
    // const routes = await fetch('http://localhost:3000/api/EMP')
    // console.log(routes)
    // const emos = await routes.json()
    // console.log(emos)
    const emps = await getEMP()
    console.log(emps)

    return (
        <div>
            {emps.map((emp, index) => (
                <div key={index}>
                    Name : {emp.name} ||
                    Age :  {emp.age}  ||
                    Salary : {emp.salary}
                </div>
            ))}
        </div>
    );
}