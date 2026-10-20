"""
Seed initial data for Alfa Global Group website
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'alfaglobal')]

async def seed_testimonials():
    """Seed initial testimonials"""
    # Client testimonials were removed: the Group does not offer advisory services, and
    # publishing them would read as SEBI-regulated activity.
    testimonials = []
    
    # Clear existing testimonials
    await db.testimonials.delete_many({})
    
    # Insert new testimonials
    if testimonials:
        await db.testimonials.insert_many(testimonials)
    print(f"✅ Seeded {len(testimonials)} testimonials")

async def seed_insights():
    """Seed initial insights/blog posts"""
    # Market commentary was removed for the same reason as the testimonials above.
    insights = []
    
    # Clear existing insights
    await db.insights.delete_many({})
    
    # Insert new insights
    if insights:
        await db.insights.insert_many(insights)
    print(f"✅ Seeded {len(insights)} insights")

async def main():
    """Main seeding function"""
    print("🌱 Starting data seeding...")
    
    try:
        await seed_testimonials()
        await seed_insights()
        print("\n✅ All data seeded successfully!")
    except Exception as e:
        print(f"\n❌ Error seeding data: {str(e)}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(main())
