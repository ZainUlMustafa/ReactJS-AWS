import React, { useState, useEffect } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const [user, setUser] = useState(null);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUser() {
            try {
                const user = await getCurrentUser();
                setUser(user);
            } catch (error) {
                console.error('Error fetching user:', error);
                navigate('/login');
            }
        }

        fetchUser();
    }, [navigate]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        setUploadSuccess(false);
        setUploadError(null);

        try {
            // const result = await Storage.put(file.name, file, {
            //     contentType: file.type,
            // });
            // console.log('Upload result:', result);
            // setUploadSuccess(true);
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadError(error.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <button
                    onClick={async () => {
                        await signOut();
                        navigate('/login');
                    }}
                >
                    Sign out
                </button>
                <h1>Welcome, {user ? user.username : 'Loading...'}</h1>
                <div className="upload-section">
                    <h2>Upload a File</h2>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="file-input"
                    />
                    <button
                        onClick={handleUpload}
                        disabled={uploading}
                        className="btn btn-primary"
                    >
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>
                    {uploadSuccess && (
                        <p className="success-message">Upload successful!</p>
                    )}
                    {uploadError && (
                        <p className="error-message">Error: {uploadError}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
