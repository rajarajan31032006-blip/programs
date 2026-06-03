SELECT MONTH(registration_date)
AS month_no,
COUNT(*) AS total_registrations
FROM Registrations
GROUP BY MONTH(registration_date)
ORDER BY month_no;