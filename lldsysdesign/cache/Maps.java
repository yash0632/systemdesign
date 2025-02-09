import java.util.HashMap;

public class Maps {
    public static void main(String[] args) {
        HashMap<String,Integer> empIds = new HashMap<>();

        empIds.put("John",12345);
        empIds.put("Carl",54321);
        empIds.put("Jerry",3456);

        System.out.println(empIds);
        System.out.println(empIds.get("John"));

        System.out.println(empIds.containsKey("John"));
        System.out.println(empIds.containsKey("jerk"));

        System.out.println(empIds.containsValue(54321));
    }
}
