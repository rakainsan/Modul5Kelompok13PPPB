import React, { useEffect, useState } from 'react';

export default function Profile() {
    // Daftar username GitHub anggota kelompok
    const usernames = [
        'chakuadrat', // Ganti dengan username GitHub anggota 1
        'facchan', // Ganti dengan username GitHub anggota 2
        'rakainsan', // Ganti dengan username GitHub anggota 3
        'Dapin118' // Ganti dengan username GitHub anggota 4
    ];

    // State untuk menyimpan data profil dari GitHub
    const [profiles, setProfiles] = useState([]);

    // Fungsi untuk mengambil data dari GitHub API
    useEffect(() => {
        // Ambil data profil masing-masing username
        const fetchProfiles = async () => {
            const profileData = await Promise.all(
                usernames.map(async (username) => {
                    const response = await fetch(`https://api.github.com/users/${username}`);
                    const data = await response.json();
                    return {
                        id: data.id,
                        name: data.login,
                        photo: data.avatar_url,
                        followers: data.followers
                    };
                })
            );
            setProfiles(profileData);
        };

        fetchProfiles();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: 'white', textAlign: 'center' }}>GitHub Profiles</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {profiles.map((profile) => (
                    <div key={profile.id} style={{
                        width: '200px',
                        padding: '10px',
                        backgroundColor: '#2c2f33',
                        borderRadius: '10px',
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        <img src={profile.photo} alt={profile.name} style={{ borderRadius: '50%', marginBottom: '10px', width: '100px', height: '100px' }} />
                        <h3>{profile.name}</h3>
                        <p>Followers: {profile.followers}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
