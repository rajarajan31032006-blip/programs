import java.sql.*;

public class JDBCInsertUpdate {
    public static void main(String[] args) {

        try{

            Connection con =
            DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/test",
            "root",
            "root"
            );

            PreparedStatement ps =
            con.prepareStatement(
            "insert into students values(?,?)"
            );

            ps.setInt(1,101);
            ps.setString(2,"John");

            ps.executeUpdate();

            PreparedStatement ps2 =
            con.prepareStatement(
            "update students set name=? where id=?"
            );

            ps2.setString(1,"David");
            ps2.setInt(2,101);

            ps2.executeUpdate();

            System.out.println("Success");

            con.close();

        }

        catch(Exception e){
            System.out.println(e);
        }
    }
}