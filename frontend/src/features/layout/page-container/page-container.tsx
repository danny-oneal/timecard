import { TopNavbar } from "../nav";

type PageContainerProps = {
    children: React.ReactNode;
};

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <TopNavbar />
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    );
};