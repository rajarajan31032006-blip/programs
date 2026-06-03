import java.net.*;
import java.io.*;

public class TCPChat {
    public static void main(String[] args)
    throws Exception {

        ServerSocket server =
        new ServerSocket(5000);

        Socket socket =
        server.accept();

        PrintWriter out =
        new PrintWriter(
        socket.getOutputStream(),
        true
        );

        out.println("Hello Client");

        socket.close();
        server.close();
    }
}