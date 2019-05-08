/* Notes:
text("hello, 30, 40); 
Need quotation marks around text, otherwise program may think it's a variable & will get error message. 

If text is not visible, it might be same color as background... 
Either change background color or change fill color.   

text("hello", how far over, how far down); 

When we move text to 0 (edge of page), we can see that the 
text coordinates are based on the bottom left corner of the text. 
*/

background(100, 100, 100);

fill(9, 224, 224);
textSize(20);
text("Hello World,", 30, 50);

fill(255, 255, 255);
textSize(14);
text("This is sample text using ProcessingJS.", 50, 80);

// result: https://i.imgur.com/9wz42O1.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/text-basics/pt/terrific-text-part-one
