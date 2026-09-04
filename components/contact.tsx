'use client'

import { useState } from 'react'
import { Mail, Phone, AtSign, ArrowRight, Check } from 'lucide-react'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.4em] text-accent">
              Contato
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-tight text-balance lg:text-7xl">
              Vamos criar
              <br />
              algo juntos
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Disponível para castings, campanhas editoriais e comerciais. Para bookings e
              propostas, entre em contato diretamente.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:barbosanadir25@gmail.com"
                className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-5 w-5 text-accent" />
                barbosanadir25@gmail.com
              </a>
              <a
                href="tel:+551195866-4804"
                className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-5 w-5 text-accent" />
                +55 11 95866-4804
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <AtSign className="h-5 w-5 text-accent" />
                @benjamin.jsb
              </a>
            </div>
          </div>

          {sent ? (
            <div className="flex flex-col items-start justify-center border border-border p-10">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                Mensagem enviada
              </h3>
              <p className="mt-2 text-muted-foreground">
                Obrigada pelo contato. Retornarei em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nome" name="nome" type="text" placeholder="Seu nome" />
                <Field label="E-mail" name="email" type="email" placeholder="voce@email.com" />
              </div>
              <Field label="Assunto" name="assunto" type="text" placeholder="Casting, campanha..." />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mensagem"
                  className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  placeholder="Conte sobre o projeto..."
                  className="resize-none border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 bg-accent px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                Enviar mensagem
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string
  name: string
  type: string
  placeholder: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  )
}
