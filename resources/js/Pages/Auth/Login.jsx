import GuestLayout from "@/layout/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { GraduationCapIcon, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loginMode, setLoginMode] = useState("student");

  const { data, setData, post, processing, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (mode === "login") {
      localStorage.setItem("role", loginMode);
    }
  }, [loginMode, mode]);

  // Ensure no state updates occur on unmounted components
  useEffect(() => {
    let isMounted = true;

    // Example of an async operation
    const fetchData = async () => {
      if (isMounted) {
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  // sumbit
  const submit = (e) => {
    e.preventDefault();

    const payload = {
      email: data.email,
      password: data.password,
    };

    if (mode === "signup") {
      payload.name = data.name;
      payload.password_confirmation = data.password_confirmation;
    }

    post(route(mode === "signup" ? "register" : "login"), {
      data: payload,
      onFinish: () => reset("password"),
    });
  };

  return (
    <GuestLayout>
      <Head title={mode === "login" ? "Masuk" : "Daftar"} />

      <div className="flex min-h-screen">
        {/* left */}
        <div className="flex flex-1 items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-lg"
          >
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3">
              <div className="gradient-primary flex h-12 w-12 items-center justify-center rounded-xl">
                <GraduationCapIcon className="h-6 w-6 text-primary-foreground" />
              </div>

              <div>
                <h1 className="text-2xl font-bold">EduSmart</h1>
                <p className="text-sm text-muted-foreground">Pelatform Belajar Cerdas</p>
              </div>
            </div>

            {/* Mode Switch */}
            <div className="mb-6 grid grid-cols-2 rounded-lg bg-muted p-1">
              {["login", "signup"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`rounded-md py-2 text-sm font-medium transition ${
                    mode === m ? "bg-background shadow" : "text-muted-foreground"
                  }`}
                >
                  {m === "login" ? "Masuk" : "Daftar"}
                </button>
              ))}
            </div>
            {mode === "signup" && (
              <div className="mb-6">
                <Label className="mb-3 block text-sm font-medium">Daftar sebagai</Label>

                <div className="rounded-xl border-2 border-primary bg-primary/5 p-4 text-center">
                  <UserIcon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-primary">Student</span>
                </div>
              </div>
            )}
            {mode === "login" && (
              <div className="mb-6">
                <Label className="mb-3 block text-sm font-medium">Login sebagai</Label>

                <div className="grid grid-cols-2 gap-3">
                  {["student", "teacher"].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setLoginMode(role)}
                      className={`rounded-xl border-2 p-4 text-center transition ${
                        loginMode === role
                          ? "border-primary bg-primary/5"
                          : "border-muted bg-muted/30"
                      }`}
                    >
                      {role === "student" ? (
                        <UserIcon className="mx-auto mb-2 h-6 w-6 text-primary" />
                      ) : (
                        <GraduationCapIcon className="mx-auto mb-2 h-6 w-6 text-primary" />
                      )}
                      <span className="text-sm font-medium capitalize text-primary">
                        {role === "student" ? "Siswa" : "Guru"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* From */}
            <form onSubmit={submit} className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label>Nama Lengkap</Label>
                  <Input
                    placeholder="Masukkan Nama Anda"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                  />
                  {/* Message */}
                </div>
              )}

              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Masukkan Email Anda"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  required
                />
                {/* Message */}
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan Password Anda"
                  value={data.password}
                  onChange={(e) => setData("password", e.target.value)}
                  required
                />
                {/* Message */}
              </div>

              {mode === "signup" && (
                <div className="space-y-2">
                  <Label>Konfirmasi Password</Label>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Konfirmasi Password Anda"
                    value={data.password_confirmation}
                    onChange={(e) => setData("password_confirmation", e.target.value)}
                    required
                  />
                  {/* Message */}
                </div>
              )}

              <Button type="submit" className="w-full" disabled={processing}>
                {processing ? "Proses..." : mode === "login" ? "Masuk" : "Daftar"}
              </Button>
            </form>
          </motion.div>
        </div>
        {/* Right */}
        <div className="gradient-hero hidden flex-1 items-center justify-center p-8 lg:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg text-center text-primary-foreground"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary-foreground/20 backdrop-blur"
            >
              <GraduationCapIcon className="h-12 w-12" />
            </motion.div>
            <h2 className="mb-4 text-3xl font-bold">Selamat datang di Edusmart</h2>
            <p className="mb-8 text-primary-foreground/80">
              Platform pembelajaran interaktif yang membantu siswa belajar lebih cerdas dengan
              materi berkualitas dan AI pendamping belajar.
            </p>
            {/* Card dummy */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: "10+", label: "Materi" },
                { value: "10+", label: "Quiz" },
                { value: "Ai", label: "Chatbot" },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl bg-primary-foreground/10 p-4 backdrop-blur">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </GuestLayout>
  );
}
