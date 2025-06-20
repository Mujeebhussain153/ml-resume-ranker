const LoginForm = () => {
    return(
        <div className="border-2 max-w h-screen flex items-center justify-center bg-black">
            <div className="size-100 shadow-lg shadow-red-500 py-10">
                <label for="username" className="text-white text-shadow-lg text-shadow-red-50">User Name: </label><br />
                <input type="text" id="username" name="username" className="border-white"/><br />
                <label for="password" className="text-white text-shadow-lg text-shadow-red-50">Password: </label><br />
                <input type="text" id="password" name="password" /><br />
                <input type="button" className="text-white"/>
            </div>
        </div>
    )
}

export default LoginForm