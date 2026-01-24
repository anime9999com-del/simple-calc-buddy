INSERT INTO public.user_roles (user_id, role) 
VALUES ('4459a99e-7439-4523-b53b-64779e841486', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;