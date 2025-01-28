'use server'
export async function CreateEmail(formData: FormData) {
    console.log('Hello world from server');

    // const email = formData.get('email')
    // console.log(email)
    const Xmail = formData.get('email');
    console.log(Xmail)
}