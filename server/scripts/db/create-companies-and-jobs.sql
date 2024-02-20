-- Create companies table if not exists
CREATE TABLE IF NOT EXISTS companies (
    id UUID PRIMARY KEY,
    user_id VARCHAR(255),
    short_description TEXT,
    full_description TEXT,
    logo_url VARCHAR(255),
    bulgaria_from INT,
    world_from INT,
    founded_in INT,
    employees_count INT,
    address VARCHAR(255),
    email VARCHAR(255),
    bulgaria_location VARCHAR(255),
    world_location VARCHAR(255),
    legal_name VARCHAR(255),
    name VARCHAR(255)
);

-- Populate companies table
INSERT INTO companies (id, user_id, short_description, full_description, logo_url, bulgaria_from, world_from, founded_in, employees_count, address, email, bulgaria_location, world_location, legal_name, name)
VALUES
    ('fe7f9d2a-4dea-43dd-afc1-b03ea46163af', 'auth0|6594032bb839738de6ac2aae', 'Amazon.com, Inc. is a multinational technology company focused on e-commerce, cloud computing, digital streaming, and artificial intelligence. Known for its customer-centric approach, Amazon has revolutionized how people shop online.', 'Founded by Jeff Bezos in 1994, Amazon.com, Inc. started as an online bookstore and has since expanded into a colossal e-commerce platform that offers everything from daily essentials to sophisticated electronics. Beyond retail, Amazon has made significant', 'logo_url_4.jpg', 150, 800, 2005, 1200, 'Company Address 4', 'email4@example.com', 'Burgas, Bulgaria', 'Worldwide', 'Amazon Corporation', 'Amazon'),
    ('4fd0f883-7dfa-45c0-a531-088205a4ffeb', 'auth0|6594032bb839738de6ac2aae', 'Apple Inc. is a pioneer in personal technology, famous for its iPhones, iPads, and Mac computers. The company is celebrated for its high-quality products, innovative design, and proprietary software and services ecosystem.', 'Apple Inc., founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976, is globally recognized for its innovation in consumer electronics, software, and online services. Its flagship products, including the iPhone, iPad, Mac, Apple Watch, and Apple TV', 'logo_url_2.jpg', 200, 1000, 2010, 1500, 'Company Address 2', 'email2@example.com', 'Plovdiv, Bulgaria', 'Worldwide', 'Apple INC', 'Apple'),
    ('1b9d88f3-1f9f-4b43-8239-96f22726d31a', 'auth0|6594032bb839738de6ac2aae', 'Meta Platforms, Inc., formerly known as Facebook, is a leader in social media and technology, offering platforms that connect billions globally, such as Facebook, Instagram, and WhatsApp. The company is at the forefront of digital innovation, including vi', 'Meta Platforms, Inc., rebranded from Facebook in 2021 to reflect its broader commitment to building the metaverse, is a social technology company that connects people through a range of platforms including Facebook, Instagram, WhatsApp, and Oculus. Its mi', 'logo_url_5.jpg', 120, 600, 2015, 2000, 'Company Address 5', 'email5@example.com', 'Ruse, Bulgaria', 'Worldwide', 'Meta Corporation', 'Meta'),
    ('da645091-574e-4ca7-ba07-398eafec86f1', 'auth0|6594032bb839738de6ac2aae', 'Google LLC specializes in internet-related services and products, including search engines, online advertising technologies, software, and hardware. It\'s renowned for its innovation, cutting-edge technology, and dynamic workplace culture.', 'Google LLC, an Alphabet Inc. subsidiary, stands as a behemoth in the tech industry, primarily known for its dominance in internet search, online advertising, and a plethora of services and products that cater to billions of users worldwide. Google\'s missi', 'logo_url_1.jpg', 100, 500, 2000, 1000, 'Company Address 1', 'email1@example.com', 'Sofia, Bulgaria', 'Worldwide', 'Google Corporation', 'Google'),
    ('71e301d7-e698-47ad-bfc2-5c19df6e3da3', 'auth0|6594032bb839738de6ac2aae', 'Microsoft Corporation is a global technology leader that develops, licenses, and supports a wide range of software products, services, and devices. The company is known for its diverse product portfolio, including the Windows operating systems, Office sui', 'Microsoft Corporation, established by Bill Gates and Paul Allen in 1975, has grown into a multinational technology company with a key focus on software development, consumer electronics, and personal computers. Its flagship products, such as Windows OS, M', 'logo_url_3.jpg', 50, 300, 1995, 800, 'Company Address 3', 'email3@example.com', 'Varna, Bulgaria', 'Worldwide', 'Microsoft LTC', 'Microsoft')
    ON CONFLICT (id) DO NOTHING;

-- Create jobs table if not exists
CREATE TABLE IF NOT EXISTS jobs (
    id UUID PRIMARY KEY,
    content TEXT,
    domain VARCHAR(255),
    location VARCHAR(255),
    level VARCHAR(255),
    remote BOOLEAN,
    type VARCHAR(255),
    hours VARCHAR(255),
    interview VARCHAR(255),
    image_url VARCHAR(255),
    company_id UUID,
    job_applications_id UUID,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    title VARCHAR(255),
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- Populate jobs table
INSERT INTO jobs (id, content, domain, location, level, remote, type, hours, interview, image_url, company_id, job_applications_id, created_at, updated_at, title)
VALUES
    ('5a82daeb-9dbf-404a-9a5e-8de8d752ceb6', 'We are looking for a **Senior Front-End Developer** with a keen eye for design and exceptional coding skills to join our innovative web development team. You will be instrumental in creating high-impact, user-centric applications', 'web', 'Sofia', 'senior-level', TRUE, 'full-time', '40 hours per week', 'on-site', 'https://example.com/image.jpg', 'da645091-574e-4ca7-ba07-398eafec86f1', NULL, '2024-01-18 17:54:32.816', '2024-01-18 17:54:32.816', 'Front-End Developer'),
    ('278b7ddd-cb9f-406a-b64f-8acd619236ec', 'Seeking a **Backend Developer** to design and implement server-side logic, ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by yo', 'web', 'Remote', 'mid-level', TRUE, 'full-time', '40 hours per week', 'virtual', 'https://example.com/backend.jpg', '4fd0f883-7dfa-45c0-a531-088205a4ffeb', NULL, '2024-02-20 10:45:04.597', '2024-02-20 10:45:04.597', 'Backend Developer'),
    ('f7a35151-328e-482d-8489-28ab1f0cf581', 'As a **Data Scientist**, you will leverage vast datasets to develop models that improve our products and decision-making processes. You will work closely with product teams to understand business needs and deliver actiona', 'tech', 'Multiple Locations', 'senior', TRUE, 'full-time', '40 hours per week', 'hybrid', 'https://example.com/datasci.jpg', 'fe7f9d2a-4dea-43dd-afc1-b03ea46163af', NULL, '2024-02-20 10:45:06.738', '2024-02-20 10:45:06.738', 'Data Scientist'),
    ('8059cd57-ed70-4c4f-b461-9469b1b1ed94', 'Seeking a **Ethical Hacker** to design and implement server-side logic, ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your coworkers into the a', 'web', 'remote', 'mid-level', TRUE, 'full-time', '40 hours per week', 'virtual', 'https://example.com/ethicalhacker.jpg', '71e301d7-e698-47ad-bfc2-5c19df6e3da3', NULL, '2024-02-20 10:45:08.954', '2024-02-20 10:45:08.954', 'Ethical Hacker'),
    ('d1d3a725-71dc-4bd4-a3b7-ebef3b4f848e', '**Project Manager** needed to oversee complex projects from conception to completion. You will coordinate with cross-functional teams to ensure projects are completed on time, within budget, and meet quality standards. Strong leadership', 'management', 'Sofia', 'senior-level', FALSE, 'full-time', '40 hours per week', 'on-site', 'https://example.com/pm.jpg', '1b9d88f3-1f9f-4b43-8239-96f22726d31a', NULL, '2024-02-20 10:45:11.117', '2024-02-20 10:45:11.117', 'Project Manager')
    ON CONFLICT (id) DO NOTHING;

