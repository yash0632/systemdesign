import java.util.HashMap;

public class Cache{
    private final EvictionPolicy evictionPolicy;
    private final Storage storage;

    public Cache(EvictionPolicy evictionPolicy, Storage storage){
        this.evictionPolicy = evictionPolicy;
        this.storage = storage;
    }

    public void set(String key,String value){

    }

    public String get(String key){
        return "";
    }
}   


class Storage{
    HashMap<String,String> storage;
    private final Integer capacity;

    public Storage(Integer capacity){
        this.capacity = capacity;
        this.storage = new HashMap<>();
    }

    public void add(String key,String value){
        if(storage.size() == capacity){
            //Remove as per eviction policy
        }
        storage.put(key,value);
    }

}

class EvictionPolicy{

}