import '@/assets/styles/global.css'

export const  metadata = {
    title: 'Property Plug',
    description: 'Property Plug is a real estate platform that connects buyers and sellers of properties',
    keywords: 'real estate, property, buy, sell, rent, mortgage, property management',
}
const MainLayout = ({children}) => {
  return (
    <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default MainLayout;