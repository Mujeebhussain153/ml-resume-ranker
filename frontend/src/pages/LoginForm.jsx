const LoginForm = () => {
    return(
        <div className="border-2 max-w h-screen flex items-center justify-center bg-black">
            <div className="size-100 shadow-lg shadow-red-500 py-10">
            <label for="username" className="text-white text-shadow-lg text-shadow-red-50">User Name: </label>
            <input type="text" id="username" name="username" className="border-white"/><br />
            <label for="password" className="text-white text-shadow-lg text-shadow-red-50">Password: </label>
            <input type="text" id="password" name="password" /><br />
            <button type="Submit" className="text-white text-shadow-lg text-shadow-red-50 border-white">Submit</button>
            </div>
        </div>
    )
}

export default LoginForm