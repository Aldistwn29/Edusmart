import { BarChart3, BookOpen, ClipboardList, LayoutDashboard, MessageSquare, User } from "lucide-react";

export const GURU_MENU_ITEMS = [
    {icon: LayoutDashboard, label:"Dashboard", route:"teacher.dashboard"},
    {icon: User, label:"Kelas", route:"teacher.classrooms.index"},
    {icon: BookOpen, label:"Materi", route:"teacher.subjects.index"},
    {icon: ClipboardList, label:"Quize", route:"teacher.quizzes.index"}, 
    // Menambahkan settings
];

export const SISWA_MENU_ITEMS    = [
    {icon: LayoutDashboard, label:"Dashboard", route:"student.dashboard"},
    {icon: BookOpen, label:"Materi", route:"student.materials.index"},
    {icon: ClipboardList, label:"Quize", route:"student.quizzes.index"},
    {icon: MessageSquare, label:"Chatbot AI", route:"student.insight"},
    // Menambahkan settings
];
