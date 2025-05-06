
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Dashboard = () => {
  // Sample state for skills management
  const [skills, setSkills] = useState([
    { id: 1, name: "React", category: "Frontend" },
    { id: 2, name: "Node.js", category: "Backend" },
    { id: 3, name: "TypeScript", category: "Frontend" }
  ]);
  
  const [newSkill, setNewSkill] = useState({ name: "", category: "" });
  
  // Sample state for contact messages
  const [messages, setMessages] = useState([
    { id: 1, name: "Jane Smith", email: "jane@example.com", subject: "Job Opportunity", message: "I'd like to discuss a potential position at our company.", date: "2023-05-06" },
    { id: 2, name: "John Brown", email: "john@example.com", subject: "Project Collaboration", message: "Interested in collaborating on an open source project.", date: "2023-05-05" }
  ]);

  // Function to add a new skill
  const handleAddSkill = () => {
    if (newSkill.name && newSkill.category) {
      setSkills([...skills, { id: Date.now(), ...newSkill }]);
      setNewSkill({ name: "", category: "" });
    }
  };

  // Function to delete a skill
  const handleDeleteSkill = (id: number) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="skills">Manage Skills</TabsTrigger>
            <TabsTrigger value="messages">Contact Messages</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Skill</CardTitle>
                  <CardDescription>Add a new skill to your portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="skill-name" className="text-sm font-medium">Skill Name</label>
                      <Input
                        id="skill-name"
                        value={newSkill.name}
                        onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                        placeholder="e.g., React, Node.js"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="skill-category" className="text-sm font-medium">Category</label>
                      <Input
                        id="skill-category"
                        value={newSkill.category}
                        onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                        placeholder="e.g., Frontend, Backend"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleAddSkill}>Add Skill</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Skills</CardTitle>
                  <CardDescription>Manage your current skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Skill</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="w-[100px]">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {skills.map((skill) => (
                        <TableRow key={skill.id}>
                          <TableCell>{skill.name}</TableCell>
                          <TableCell>{skill.category}</TableCell>
                          <TableCell>
                            <Button variant="destructive" size="sm" onClick={() => handleDeleteSkill(skill.id)}>
                              Remove
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
                <CardDescription>View messages from people who contacted you</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messages.map((message) => (
                      <TableRow key={message.id}>
                        <TableCell>{message.name}</TableCell>
                        <TableCell>{message.email}</TableCell>
                        <TableCell>{message.subject}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{message.message}</TableCell>
                        <TableCell>{message.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
