const Page = () => {
  
  const handleFrom = async (formData) => {
    "use server";
    console.log(formData);
    const username = formData.get("username");
    console.log("Hello", username);
  };
  
  return (
    <div>
      <form action={handleFrom}>
        <input type="text" name="username"/>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Page;