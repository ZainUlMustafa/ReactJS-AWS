import React, { useState } from 'react';
import { signUp, confirmSignUp } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        const currentUnixTimestamp = Math.floor(Date.now() / 1000);
        try {
            await signUp({
                username: email,
                password,
                options: {
                    userAttributes: {
                        name,
                        email: email,
                        updated_at: currentUnixTimestamp.toString(),
                    },
                }
            });
            setStep(2);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleConfirmSignup = async (e) => {
        e.preventDefault();
        try {
            // await confirmSignUp(username, confirmationCode);
            await confirmSignUp({username: email, confirmationCode});
            navigate('/login');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
            {error && <p className="text-danger">{error}</p>}
            {step === 1 && (
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </form>
            )}
            {step === 2 && (
                <form onSubmit={handleConfirmSignup}>
                    <div className="form-group">
                        <label>Confirmation Code</label>
                        <input
                            type="text"
                            className="form-control"
                            value={confirmationCode}
                            onChange={(e) =>
                                setConfirmationCode(e.target.value)
                            }
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Confirm Sign Up
                    </button>
                </form>
            )}
        </div>
    );
}

export default Signup;
