export default function (errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Geçersiz email'
        case 'auth/email-already-exists':
            return 'kullanıcı zaten kayıtlı';
        case 'auth/user-not-found':
            return 'kullanıcı bulunamadı';
        case 'auth/weak-password':
            return 'Parola çok zayıf';
        case 'auth/wrong-password':
            return 'Parola geçersiz';
        default:
            return errorCode;
    }
}