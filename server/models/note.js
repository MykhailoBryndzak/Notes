import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {type: String},
    text: {type: String, required: true},
    color: {type: String},
    createAt: {type: Date},
    spendTime: {type: tring}
});

const Note = mongoose.model('Note', NoteSchema);