package com.company;


import java.util.HashMap;
import java.util.Stack;

public class Main {

    public static void main(String[] args) {

        // for sortByString
        String s = "weather";
        String t = "therapyw";
        sortByString(s,t);

        // for sortByString
        String s2 = "good";
        String t2 = "odg";
        sortByString(s2,t2);

        // for decode
        String decodeInput = "2[b3[a]]";
        String decodeInput2 = "2[aaa2[b3[cc]]]";
        decode(decodeInput);
        decode(decodeInput2);

    }


    /**
     *
     * @param s -
     * @param t -
     * runtime is O(m+n) but outer for-loop is bigger than inner for-loop, so can reduce it to O(n)
     */
    public static void sortByString(String s, String t){

        // Edge case Null
        if(s == null || t == null){
            System.out.println("invalid string");
        }
        // Edge case Empty
        if((s == "" || t == "") || (s == " " || t == " ")){
            System.out.println("empty string");
        }

        char [] inputCharArr = t.toCharArray();
        char [] stringToBeSortedArr = s.toCharArray();
        HashMap<Character, Integer> stringCharCounts = new HashMap<Character, Integer>();
        StringBuilder finalStr = new StringBuilder("");

        // Create Hashmap <char, count> of String s,
        for(char elem: stringToBeSortedArr){
            if(!stringCharCounts.containsKey(elem)){
                stringCharCounts.put(elem, 1);
            } else {
                stringCharCounts.put(elem, stringCharCounts.get(elem) + 1);
            }
        }

        // go thru String t, and find corresponding char in String s
        // add char * count to final string
        for(char elem: inputCharArr){
            if(stringCharCounts.containsKey(elem)){
                // get count from Hashmap and print char * count
                for(int i=0; i < stringCharCounts.get(elem); i++){
                    finalStr.append(elem);
                }
            }
        }

        System.out.println(finalStr);
    }

    /**
     *
     * @param input - String to be decoded
     * k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times
     * k is guaranteed to be a positive integer
     * runtime is O(m+n) but outer for-loop is bigger than inner for-loop, so can reduce it to O(n)
     */
    public static void decode(String input){
        char [] inputCharArr = input.toCharArray();

        // Create Stack with index of opening brackets
        Stack<Integer> openBrackets = new Stack<Integer>();
        for(int i=0; i < inputCharArr.length; i++){
            if(inputCharArr[i] == '['){
                openBrackets.push(i);
            }
        }

        // variables to keep track of patterns
        int lastPart = -1;
        String lastPattern = "";
        StringBuilder output = new StringBuilder("");

        // retrieve pattern using openbracket stack and closingbracket from for loop
        for(int i=0; i < inputCharArr.length; i++){
            // find closing bracket from left to right
            if(inputCharArr[i] == ']'){
                int indexOfOpen = openBrackets.pop();
                // if for innermost pattern
                // else for all other patterns
                if (lastPart == -1) {
                    int count = Character.getNumericValue(inputCharArr[indexOfOpen - 1]);
                    StringBuilder pattern = new StringBuilder("");
                    for(int j = 0; j < count; j++){
                        pattern.append(input.substring(indexOfOpen + 1, i));
                    }
                    lastPattern = pattern.toString();
                } else {
                    int count = Character.getNumericValue(inputCharArr[indexOfOpen - 1]);
                    for(int j = 0; j < count; j++){
                        StringBuilder tempPattern = new StringBuilder(input.substring(indexOfOpen + 1, lastPart));
                        tempPattern.append(lastPattern);
                        output.append(tempPattern.toString());
                    }
                }
                lastPart = indexOfOpen - 1;
            }
        }
        System.out.println(output.toString());
    }


    
}
