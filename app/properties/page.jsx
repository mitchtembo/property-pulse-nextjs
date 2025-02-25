import PropertyCard from '@/app/components/PropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';

const PropertiesPage = async () => {
  try {
    await connectDB();
    console.log('Database connected in properties page');

    const properties = await Property.find({}).lean();
    console.log('Properties fetched:', properties);

    if (!properties) {
      console.log('No properties found');
      return <p>No properties found</p>;
    }

    return (
      <section className="px-4 py-6">
        <div className="container-xl md:container m-auto">
          {properties.length === 0 ? (
            <p>No properties found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error fetching properties:', error);
    return <p>Error loading properties</p>;
  }
};

export default PropertiesPage;