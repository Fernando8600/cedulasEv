export const metadata = {
  title: 'Cedulas Evaluación',
  description: 'Cedulas de Evaluación',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
