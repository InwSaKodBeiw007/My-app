export default function Page() {
    async function Create(formData: FormData) {
        'use server'
        console.log('Hello world from server');

        // const email = formData.get('email')
        // console.log(email)
        const Xmail = formData.get('email');
        console.log(Xmail)
    }
    // console.log('nn')
    return (
        <div>
            <form action={Create}>
                <input type="email" name="email" />
                <button>Submit</button>
            </form>
        </div >
    )
}