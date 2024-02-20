-- Create companies table if not exists
CREATE TABLE IF NOT EXISTS company (
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

-- Create jobs table if not exists
CREATE TABLE IF NOT EXISTS job (
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


