"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Home() {
  const profile = {
    name: "Mateus Feitoza",
    tagline:
      "Defendendo seus direitos com ética e excelência. Pautado na justiça e na verdade, somos a ponte entre você e a solução.",
    avatarUrl: "/avatar.webp",
    instagram: "https://instagram.com/ronaldomateus_",
    whatsapp: "https://wa.me/5588999999999?text=Ol%C3%A1%2C+vim+do+biosite",
    linkedin:
      "https://www.linkedin.com/in/ronaldomateus/",
    footer: "Powered by Feitosa Engenharia WebFactory",
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-10">
      <Card className={cn("w-full max-w-md glass rounded-3xl")}>
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center gap-4">
            <Avatar className="h-24 w-24 ring-8 ring-white/20 shadow-xl">
              <AvatarImage src={profile.avatarUrl} alt={profile.name} />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>

            <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow">
              {profile.name}
            </h1>

            <p className="text-white/90 leading-relaxed">{profile.tagline}</p>

            <div className="w-full mt-2 space-y-3">
              <Button asChild variant="outline" className="w-full h-12 justify-start gap-3 border-white/30 bg-white/10 hover:bg-white/20 text-white">
                <Link href={profile.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-5 w-5" />
                  <span className="font-semibold">Instagram</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full h-12 justify-start gap-3 border-white/30 bg-white/10 hover:bg-white/20 text-white">
                <Link href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="h-5 w-5" />
                  <span className="font-semibold">Chame no WhatsApp</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full h-12 justify-start gap-3 border-white/30 bg-white/10 hover:bg-white/20 text-white">
                <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-5 w-5" />
                  <span className="font-semibold">LinkedIn</span>
                </Link>
              </Button>
            </div>

            <Separator className="my-4 bg-white/30" />
            <p className="text-xs text-white/80">{profile.footer}</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}