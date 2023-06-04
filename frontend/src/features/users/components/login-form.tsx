import { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { login } from 'src/api/users';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const signInMutation = useMutation({
        mutationFn: login
    });

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        signInMutation.mutate({ username, password });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
            <div className="mb-4">
                <label htmlFor="username" className="text-sm font-bold mb-2 block">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="border border-gray-400 px-3 py-2 w-full rounded-sm"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="text-sm font-bold mb-2 block">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="border border-gray-400 px-3 py-2 w-full rounded-sm"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export { LoginForm };
