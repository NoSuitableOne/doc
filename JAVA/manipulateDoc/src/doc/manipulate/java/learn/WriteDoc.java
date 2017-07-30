package doc.manipulate.java.learn;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.Charset;

public class WriteDoc {

	public void newDocWrite(String filename, String content) throws IOException{
		OutputStream output =  new FileOutputStream(filename);
		try{
		    byte[] bytes = content.getBytes(Charset.forName("UTF-8"));
		    output.write(bytes);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally{
		    output.close();
		} 
	}
	
	public void appendDocWrite(String filename, String content) throws IOException{
		OutputStream output =  new FileOutputStream(filename, true);
		try {
			byte[] bytes = content.getBytes(Charset.forName("UTF-8"));
			output.write(bytes);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally{
			output.close();
		}
	}
	
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
			WriteDoc wd = new WriteDoc();
			wd.newDocWrite("new-test.txt", "hello");
			wd.appendDocWrite("new-test.txt", " world!");
	}

}
