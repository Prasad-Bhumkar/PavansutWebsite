import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <BookOpen className="h-16 w-16 text-blue-300 opacity-20" />
      </div>
      <div className="absolute bottom-20 right-20 animate-pulse">
        <GraduationCap className="h-20 w-20 text-yellow-300 opacity-30" />
      </div>
      
      <Card className="w-full max-w-md mx-4 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-t-4 border-blue-500 transform transition-all hover:scale-105 duration-300">
        <CardContent className="pt-8 pb-12 px-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
                <AlertCircle className="h-12 w-12 text-blue-500" />
                <div className="absolute h-1 w-1 bg-blue-300 rounded-full animate-ping opacity-70"></div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Lost in the Library?
            </h1>
            
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              The page you're looking for might have been checked out by another student 
              or is hiding between the chapters of a book!
            </p>

            <div className="w-full py-4 bg-yellow-50 rounded-lg border border-yellow-100 mb-6">
              <p className="text-sm font-medium text-yellow-800 flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
                Try searching our knowledge database again or visit the homepage
              </p>
            </div>

            <a 
              href="/" 
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all transform hover:-translate-y-0.5"
            >
              Return to Homeroom
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Hidden easter egg */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-400 hover:text-gray-600 cursor-pointer group">
        <div className="hidden group-hover:block absolute bottom-8 right-0 bg-white p-2 rounded shadow-md text-sm text-gray-700">
          (This way to the principal's office!)
        </div>
        <span className="opacity-50 group-hover:opacity-100 transition-opacity">📚</span>
      </div>
    </div>
  );
}