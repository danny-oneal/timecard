export interface UserResponseDto {
    accessToken: string;
    user: {
        email: string;
        id: number;
    };
}
