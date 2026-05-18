import { DemoComponentProps } from "src/components/docs";
import { FormContextProvider, useFormContext, useObservableProperty, useSingleton } from "zeta-dom-react";
import { AuthChallenge } from "@misonou/brew-extension-auth";
import { useEffect, useState } from "react";
import { Button, FieldColumn, TextInput } from "src/components/controls";
import { initApp } from "./init"

export default function Component({ console }: DemoComponentProps) {
    // for demonstration purpose only, app should be created as a module export
    const app = useSingleton(initApp, []);
    const user = useObservableProperty(app, 'user');
    const form = useFormContext({ username: 'test', otpValue: '' });
    const [challenge, setChallenge] = useState<AuthChallenge | null>(null);

    useEffect(() => {
        return app.on('login logout', e => {
            console.log('Event:', e.type);
        });
    }, [app]);

    return (
        <FormContextProvider value={form}>
            <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'start' }}>
                {user ?
                    <>
                        <span>Logged in as {user.name}</span>
                        <Button variant="primary" onClick={() => app.logout()} label="Logout" />
                    </> :
                    challenge ?
                        <>
                            <span>Email hint: {challenge.value} (OTP: 123456)</span>
                            <TextInput label="OTP" name="otpValue" required />
                            <FieldColumn columns="1fr 1fr">
                                <Button variant="primary" onClick={submitOtp} label="OK" />
                                <Button onClick={() => setChallenge(null)} label="Cancel" />
                            </FieldColumn>
                        </> :
                        <>
                            <TextInput label="Username" name="username" required />
                            <Button variant="primary" onClick={login} label="Login" />
                        </>}
            </div>
        </FormContextProvider>
    );

    async function login() {
        if (await form.validate()) {
            try {
                const challenge = await app.login();
                if (challenge) {
                    console.log('Received challenge:', challenge);
                    setChallenge(challenge);
                    form.setError('otpValue', '');
                }
            } catch (error) {
                form.setError('username', 'Login failed, please try again');
            }
        }
    }

    async function submitOtp() {
        if (await form.validate()) {
            try {
                await challenge!.continueWith(form.data.otpValue);
                setChallenge(null);
            } catch (error) {
                form.setError('otpValue', 'Otp incorrect, please try again');
            }
        }
    }
}
