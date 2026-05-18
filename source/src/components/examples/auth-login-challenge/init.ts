import Auth, { AuthClient, AuthExtension, AuthProvider, AuthProviderResult } from "@misonou/brew-extension-auth";
import { brew } from "src/util/harness";

export interface User {
    name: string;
}

export function initApp() {
    // define custom auth client
    const client: AuthClient<"dummy", AuthProviderResult<User>> = {
        authType: '',
        providerType: 'dummy',
        isHandleable() {
            return true;
        },
        async refresh(current) {
            return { ...current, account: { name: 'Test User' } };
        },
        async login(params, context) {
            await context.challenge('otp-email', '*****@example.com', otp => {
                if (otp !== '123456') {
                    throw new Error('Invalid OTP');
                }
            });
            return {
                account: { name: 'Test User' },
                accountId: 'test-account',
                accessToken: 'test-access-token',
                expiresOn: new Date(Date.now() + 3600 * 1000)
            };
        },
        async logout() {
        }
    };

    // init app
    return brew.with(Auth as AuthExtension<User>)(app => {
        app.useAuth({
            provider: AuthProvider.from('test-provider', client)
        });
    });
}
