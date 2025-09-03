import React from "react";

const frases = [
    "Desarrolla apps móviles increíbles con React Native.",
    "Crea experiencias nativas usando JavaScript y Expo.",
    "Itera rápido y publica en iOS y Android fácilmente.",
    "React Native + Expo: tu puerta al desarrollo móvil moderno.",
];

const descripciones = [
    "React Native es un framework de código abierto creado por Meta para construir aplicaciones móviles nativas usando JavaScript y React.",
    "Expo es una plataforma y conjunto de herramientas que facilita el desarrollo, prueba y despliegue de apps hechas con React Native.",
    "Con React Native y Expo puedes compartir la mayor parte del código entre iOS y Android, acelerando el desarrollo y mantenimiento.",
    "La comunidad de React Native y Expo es muy activa, ofreciendo librerías, componentes y soporte para crear apps robustas y escalables.",
];

export default function LandingReactNative() {
    return (
        <main style={{ padding: 32, fontFamily: "sans-serif", maxWidth: 700, margin: "0 auto" }}>
            <h1>React Native & Expo</h1>
            <section>
                <h2>Frases Inspiradoras</h2>
                <ul>
                    {frases.map((frase, idx) => (
                        <li key={idx}>{frase}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>¿Por qué usar React Native y Expo?</h2>
                <ul>
                    {descripciones.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}