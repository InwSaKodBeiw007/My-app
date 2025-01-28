export async function GET(req: Request, res: Response) {
    const data = [
        { 'name': 'alice', 'age': 25, 'salary': 10000 },
        { 'name': 'promed', 'age': 22, 'salary': 30000 },
        { 'name': 'Ishank', 'age': 15, 'salary': 20000 },
    ]

    return Response.json(data)
}